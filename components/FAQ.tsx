"use client";
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'

type FAQItem = {
  question: string
  answer: string
}
// someone do this i don't want to.
// guess i will have to do it ugh
const faqItems: FAQItem[] = [
  {
    question: "Is Borion a virus?",
    answer: "Borion is NOT a virus, there may be some antiviruses that detect it as a [false positive](https://encyclopedia.kaspersky.com/glossary/false-positive/), we reccomend making an exception on you antivirus."
  },
  {
    question: "Is Borion Open Source?",
    answer: "No, Borion is not open source."
  },
  {
    question: "Does Borion cost money?",
    answer: "No, Borion does not cost money."
  },
  {
    question: "When 1.21.50 support?",
    answer: "No™️"
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div className="faq-section bg-[#0A0A0A] rounded-lg p-8 mt-8 text-left border border-[#222222]">
      <h2 className="text-blue-400 mb-6 text-center text-2xl font-bold">FAQ</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-[#222222] pb-4">
            <button
              className="flex justify-between items-center w-full text-left text-[#E5E5E5] hover:text-blue-400 transition-colors duration-300"
              onClick={() => toggleItem(index)}
            >
              <span className="font-semibold">{item.question}</span>
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openIndex === index && (
              <div className="mt-2 text-[#BBBBBB]">
                <ReactMarkdown 
                  components={{
                    a: ({node, ...props}) => (
                      <a {...props} className="text-blue-500 hover:text-blue-400 underline" />
                    )
                  }}
                >
                  {item.answer}
                </ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
