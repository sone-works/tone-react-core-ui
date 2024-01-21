import ToneApiService from '@sone-dao/tone-react-api'
import { useEffect, useState } from 'react'
import Chip from './Chip'
import FormGroup from './FormGroup'
import Input from './Input'

type TagsProps = {
  tags?: any[]
  setTags?: (tags: any[]) => void
}

export default function TagsInput({
  tags = [],
  setTags = () => {},
}: TagsProps) {
  const [results, setResults] = useState<any[]>([])
  const [isSearching, setSearching] = useState<boolean>(false)
  const [isAddingTag, setAddingTag] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const api = new ToneApiService()

  useEffect(() => {
    setResults([])

    if (searchTerm) {
      setSearching(true)

      const timer = setTimeout(() => searchForTag(searchTerm), 1000)

      return () => {
        clearTimeout(timer)
      }
    }

    setSearching(false)
  }, [searchTerm])

  return (
    <FormGroup label="tags" className="mb-4">
      <Input
        value={searchTerm}
        setValue={setSearchTerm}
        placeholder="Search for artist..."
        className="my-2 w-full"
        variant="solid"
        startContent={<i className="fa-fw fa-solid fa-magnifying-glass mr-1" />}
        endContent={
          isSearching && (
            <i className="fa-fw fa-regular fa-compact-disc mr-1 fa-spin-pulse" />
          )
        }
        results={
          searchTerm ? (
            <div>
              <ul
                className="flex flex-col overflow-y-scroll scrollbar-none"
                style={{
                  maxHeight: '33vh',
                }}
              >
                {results.map((result, i) => (
                  <li
                    key={i}
                    className="inline-block text-global-flipped rounded-xl p-2 font-content text-lg cursor-pointer"
                    onClick={() => addTag(result)}
                  >
                    {result.display}
                  </li>
                ))}
              </ul>
              <button
                className="flex justify-center p-2 font-content w-full border-solid border-t-2 border-global-flipped"
                onClick={() => addTagToTone(searchTerm)}
              >
                {isAddingTag && (
                  <i className="fa-fw fa-regular fa-compact-disc mr-1 fa-spin-pulse" />
                )}{' '}
                Add "{searchTerm}" to tags
              </button>
            </div>
          ) : (
            <></>
          )
        }
      />
      <p className="bg-global-flipped text-global-flipped text-sm font-content p-1 rounded-xl w-full">
        <i className="fa-fw fa-solid fa-tag mx-1" />A little blurb on the
        importance of tags here.
      </p>
      {tags.length ? (
        <>
          <ul className="my-4 flex flex-wrap">
            {tags.map((tag: any, i: number) => (
              <li>
                <Chip
                  key={i}
                  className="mr-2 cursor-pointer"
                  onClick={() => removeTag(i)}
                  styles={{
                    wrapper: {
                      paddingLeft: '0.5rem',
                      paddingRight: '0.5rem',
                    },
                  }}
                >
                  {tag.display}
                </Chip>
              </li>
            ))}
          </ul>
          <p className="bg-global-flipped font-content text-global-flipped text-sm p-1 w-full rounded-xl ">
            <i className="fa-fw fa-solid fa-circle-info mx-1" />
            Click/tap on tag to remove it from the list.
          </p>
        </>
      ) : (
        <></>
      )}
    </FormGroup>
  )

  async function searchForTag(tag: string) {
    return api.tags
      .searchByDisplay(tag)
      .then((tags) => {
        setResults(tags)

        setSearching(false)
      })
      .catch((error) => {
        setSearching(false)
      })
  }

  async function addTag(tag: any) {
    if (!tags.includes(tag)) {
      setTags([...tags, tag])

      setSearchTerm('')

      setResults([])
    }
  }

  async function removeTag(index: number) {
    const updatedTags = tags.filter((tag: any, i: number) => {
      if (i !== index) return tag
    })

    setTags(updatedTags)
  }

  async function addTagToTone(display: string) {
    setAddingTag(true)

    api.tags
      .addTag(display)
      .then((tag) => {
        setAddingTag(false)

        setTags([...tags, tag])

        setSearchTerm('')

        setResults([])
      })
      .catch((error) => {
        setAddingTag(false)
      })
  }
}
