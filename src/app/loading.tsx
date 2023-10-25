import LoagingSkeleton from './components/LoadingSkeleton'

export default function loading() {
  return (
    <div className="container mx-auto px-4">
      <LoagingSkeleton isLoading/>
    </div>
  )
}
