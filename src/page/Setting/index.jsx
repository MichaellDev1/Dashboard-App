import ContentSection from '../../components/ContentSection/index'
import useUser from '../../hooks/useUser'

export default function Setting () {
  const { user } = useUser()
  return user
    ? <ContentSection>
      <div className='px-6 w-full h-min-[400px] relative'>
        <h1 className='text-2xl font-semibold'>Setting</h1>
      </div>
      </ContentSection>
    : null
}
