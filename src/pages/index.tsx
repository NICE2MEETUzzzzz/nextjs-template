import OpenGraph from '@shared/open-graph'

export default function Index() {
  return (
    <>
      <OpenGraph 
          canonical='https://localhost'
          title='NICEz | Home'
          description='NICEz Description'
          image={{
            src: 'cover.jpg',
            width: 1920,
            height: 1080,
          }}
          icon='/favicon.ico'
          alternativeTitle={["NICEz Keyword"]}
      />
      <div className='flex flex-col items-center justify-center min-h-screen mx-auto bg-black text-white'>
          <div className='w-[500px]'>
            <div className='flex flex-wrap justify-center space-x-5'>
              <h1>WOW!</h1>
            </div>
          </div>
      </div>
    </>
  )
}