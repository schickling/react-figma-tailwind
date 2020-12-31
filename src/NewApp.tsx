import * as React from 'react'
import { Page } from 'react-figma'

export const NewApp = () => {
  return (
    <Page isCurrent name="Tailwind" style={{ flexDirection: 'row' }}>
      <button className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Button text
      </button>

      <div className="bg-white ml-16">
        <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <div className="block">Ready to dive in?</div>
            <div className="block">Start your free trial today.</div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="inline-flex rounded-md shadow">
              <div className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">
                Get started
              </div>
            </div>
            <div className="inline-flex ml-3">
              <div className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200">
                Learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
