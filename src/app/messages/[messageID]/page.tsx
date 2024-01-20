export default function Page({ params }: { params: { messageID: string } }) {
	return <div>My Frient: Rajat {params.messageID}</div>;
}
