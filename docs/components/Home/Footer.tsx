import clsx from 'clsx'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { TwitterIcon, InstagramIcon, DiscordIcon } from './icons'

export const Footer = ({ logo }: { logo: ReactNode }) => {
  const [state, submitToHubspot] = useNewsletterSignup()
  const [email, setEmail] = useState('')

  return (
    <footer className="border-t border-black-10 px-5 pt-15">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          {logo}
          <div className="flex items-start gap-10">
            <div className="flex-1">
              <form
                onSubmit={e => {
                  e.preventDefault()
                  submitToHubspot(email)
                }}
              >
                <div className="flex items-center rounded-lg border dark:border-white-25 border-black-10 p-3 md:max-w-[378px]">
                  <input
                    className={clsx(
                      'pl-1 pr-4 w-full outline-none bg-transparent text-sm',
                      'dark:text-white-80 text-black-80',
                      'dark:placeholder:text-white-50 placeholder:text-black-50'
                    )}
                    placeholder="Stay up to date"
                    type="text"
                    value={
                      state === 'invalid'
                        ? 'Please enter a valid email address!'
                        : state === 'success'
                        ? 'Thanks for joining!'
                        : email
                    }
                    disabled={state !== 'initial'}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={state !== 'initial'}
                    className="hover-fade px-3 py-1 rounded text-themed-primary dark:bg-white-15 bg-black-7 font-bold text-[0.625rem] leading-[1rem] disabled:pointer-events-none"
                    aria-label="Join"
                  >
                    <div className="flex justify-center w-[22px]">
                      {state === 'loading' ? (
                        <div className="py-0.5">
                          <div
                            className={clsx(
                              'w-3 h-3 border-2 rounded-full border border-l-transparent animate-spin',
                              'dark:border-t-white border-t-black-80',
                              'dark:border-r-white border-r-black-80',
                              'dark:border-b-white border-b-black-80'
                            )}
                          />
                        </div>
                      ) : (
                        'Join'
                      )}
                    </div>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-1 flex gap-2 text-xs font-medium text-themed-secondary">
              <div className="flex gap-2 flex-1">
                <div className="flex flex-col gap-3 flex-1">
                  <a className="hover-fade">Home</a>
                  <a className="hover-fade">Pricing</a>
                  <a className="hover-fade">Blog</a>
                  <a className="hover-fade">Docs</a>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <a className="hover-fade">Terms</a>
                  <a className="hover-fade">Privacy</a>
                </div>
              </div>
              <div className="flex gap-2 flex-1">
                <div className="flex flex-col gap-3 flex-1">
                  <a className="hover-fade">Contact</a>
                  <a className="hover-fade">FAQ</a>
                  <a className="hover-fade">Media kit</a>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <a className="hover-fade">Sequence Builder</a>
                  <a className="hover-fade">Sequence Wallet</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t dark:border-white-10 border-black-10 flex items-center justify-between py-7">
          <div className="flex items-center gap-2">
            <a className="text-themed-secondary hover-fade">
              <TwitterIcon />
            </a>
            <a className="text-themed-secondary hover-fade">
              <DiscordIcon />
            </a>
            <a className="text-themed-secondary hover-fade">
              <InstagramIcon />
            </a>
          </div>
          <img
            src="/img/horizon-logo.png"
            className="max-w-24 dark:invert-0 invert"
          />
        </div>
      </div>
    </footer>
  )
}

type NewsletterSignupState =
  | 'initial'
  | 'loading'
  | 'success'
  | 'invalid'
  | 'error'

const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const NEWSLETTER_SIGNUP_FORM_ID = '65e38f6a-690c-4318-80db-be3b97a34448'

const useNewsletterSignup = () => {
  const [state, setState] = useState<NewsletterSignupState>('initial')

  const timeout = useRef<NodeJS.Timeout | undefined>(undefined)
  useEffect(
    () => () => {
      clearTimeout(timeout.current)
      timeout.current = undefined
    },
    []
  )

  const submit = async (email: string) => {
    const isEmailValid = EMAIL_PATTERN.test(email)
    if (!isEmailValid) {
      setState('invalid')
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => setState('initial'), 1500)
      return
    }

    setState('loading')
    const response = await fetch(
      `https://sequence-contentful.vercel.app/api/forms/${NEWSLETTER_SIGNUP_FORM_ID}`,
      {
        method: 'POST',
        body: JSON.stringify({
          fields: [{ name: 'email', value: email }],
          context: {
            pageUri: window.location.href,
            pageName: 'Sequence docs footer',
          },
          skipValidation: 'false',
        }),
      }
    )

    const { result } = await response.json()
    if (result === 'error') {
      setState('error')
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => setState('initial'), 1500)
      return
    }
    setState('success')
  }

  return [state, submit] as const
}
