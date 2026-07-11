import { useState } from 'react'

function App() {
  const [text, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  function handleInput(e) {
    const inputText = e.target.value;
    setText(inputText);
    const characters = inputText.replace(/\s+/g, '');
    setCharacterCount(characters.length);
    const words = inputText.trim().split(/\s+/).filter(word => word.trim().length > 0);
    setWordCount(words.length);
    const sentences = inputText.trim().split(/[.!?]\s*/).filter(sentence => sentence.trim().length > 0);
    setSentenceCount(sentences.length);
  }

  function handleDelete() {
    setText("");
    setCharacterCount(0);
    setWordCount(0)
    setSentenceCount(0);
  }

  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-[#f5f0e6] bg-[linear-gradient(#d6d3d1_1px,transparent_1px),linear-gradient(to_right,#d6d3d1_1px,transparent_1px)] bg-[size:40px_40px]'>

      <div className='w-full max-w-6xl rounded-3xl bg-[#fcfaf6] shadow-2xl overflow-hidden'>

        <div className="flex flex-col lg:flex-row">

          <div className='flex-1 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-gray-300 bg-[#fffdf8]'>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Notebook
            </h1>
            <textarea type="text" rows={9} value={text}
              placeholder='Type or paste your text here ...'
              onChange={handleInput}
              className="w-full resize-none rounded-xl border border-gray-300 p-4  leading-8 outline-none bg-white focus:ring-2 focus:ring-amber-400"
            />
            <button onClick={handleDelete}
              className='mt-6 w-full rounded-xl bg-red-500 py-3 text-white font-semibold hover:bg-red-600 transition'
            >Delete</button>
          </div>

          <div className='flex-1 p-6 md:p-8 bg-[#fffdf8]'>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Results
            </h1>

            <div className="space-y-5">

              <div className="rounded-xl bg-white shadow p-5 flex justify-between">
                <span className="font-medium">Characters</span>
                <span className="text-2xl font-bold text-amber-600">
                  {characterCount}
                </span>
              </div>

              <div className="rounded-xl bg-white shadow p-5 flex justify-between">
                <span className="font-medium">Words</span>
                <span className="text-2xl font-bold text-amber-600">
                  {wordCount}
                </span>
              </div>

              <div className="rounded-xl bg-white shadow p-5 flex justify-between">
                <span className="font-medium">Sentences</span>
                <span className="text-2xl font-bold text-amber-600">
                  {sentenceCount}
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default App