export default function Page({ params }: { params: { messageID: string } }) {
	console.log(params)
	return <div>My Post: {params.messageID}</div>;
}
