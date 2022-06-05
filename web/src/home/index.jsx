import { useState } from "react"
import { HeartIcon } from "@heroicons/react/outline"

const MAX_TWEET_CHAR = 140

function TweetTextField() {
  const [text, setText] = useState("")

  function changeText(e) {
    setText(e.target.value)
  }

  return (

    <div className="border-b border-silver p-4 space-y-6">

      <div className="flex space-x-5">
        <img src="../assets/user-avatar-blue.svg" className="w-7" alt="Avatar do usuário"/>
        <h1 className="font-bold text-xl">Página Inicial</h1>
      </div>

      <form className="pl-12 text-lg flex flex-col">

        <textarea 
          className="bg-transparent outline-none disabled:opacity-50"
          placeholder="O que está acontecendo?"
          name="tweet"
          value={text}
          onChange={changeText}
          // disabled
        />

        <div className="flex justify-end items-center space-x-3">
          
          <span className="text-sm">
            <span>{text.length}</span>/<span className="text-birdBlue">{MAX_TWEET_CHAR}</span>
          </span>

          <button 
            className="bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50"
            disabled={text.length > MAX_TWEET_CHAR}
          >
            Tweet
          </button>

        </div>
      
      </form>

    </div>

  )
}

function Tweet({ name,username,avatar,children }) {
  return (

    <div className="flex space-x-3 p-4 border-b border-silver">

        <div>
            <img src={avatar} alt="Avatar do usuário"/>
        </div>

        <div className="space-y-1">

            <span className="font-bold text-sm">{name}</span>{" "}
            <span className="text-sm text-silver">@{username}</span>
          
            <p>{children}</p>

            <div className="flex space-x-1 text-silver text-sm items-center">
              <HeartIcon className="w-6 stroke-1" />
              <span>1.2k</span>
            </div>

        </div>
    
    </div>

  )
}

export function Home() {
  return (
    <>

      <TweetTextField/>

      <Tweet name="Elon Musk" username="elonmusk" avatar="../assets/user-avatar-blue.svg">
        Let's make Twitter maximum fun!
      </Tweet>

      <Tweet name="Maycon Alexsander" username="mayconalex" avatar="../assets/user-avatar-blue.svg">
        Let's make Twitter maximum awesome!
      </Tweet>
    
    </>
  )
}