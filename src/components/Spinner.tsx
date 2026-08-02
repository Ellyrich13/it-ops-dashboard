import { Loader2 } from 'lucide-react'

function Spinner() {
  return (
    <div className="flex items-center justify-center py-16">
      <Loader2 className="animate-spin text-teal-500" size={28} />
    </div>
  )
}

export default Spinner