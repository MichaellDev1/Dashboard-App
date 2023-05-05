import ContentSection from '../../components/ContentSection/index'
import ListCoins from '../../components/ListCoins'
import useUser from '../../hooks/useUser'

export default function Wallet () {
  const { user } = useUser()

  return user
    ? <ContentSection>
      <div className='px-6 w-full h-min-[400px] relative'>
        <h1 className='text-2xl font-semibold mb-2'>Your wallet</h1>
        <ListCoins user={user} />
      </div>
      </ContentSection>
    : null
}
