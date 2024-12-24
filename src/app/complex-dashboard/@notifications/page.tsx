import Card from "@/components/card"
import Link from "next/link"

const Notifications = () => {
  return (
    <Card>
    <div>Notifications</div>
    <div><Link href="/complex-dashboard/archive">Archive</Link></div>
    </Card>
  )
}

export default Notifications