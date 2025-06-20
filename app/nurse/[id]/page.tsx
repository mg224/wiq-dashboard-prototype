import NurseProfile from "../../../components/nurse-profile"

interface PageProps {
  params: {
    id: string
  }
}

export default function NursePage({ params }: PageProps) {
  return <NurseProfile nurseId={params.id} />
}
