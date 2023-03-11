import { trpc } from "@frontend/trpc"

const App = () => {
	const { data: hello } = trpc.test.users.useQuery()

	return (
		<div>
			<h1>It works!</h1>
			<p>TRPC result: {JSON.stringify(hello?.[0].email)}</p>
		</div>
	)
}

export default App
