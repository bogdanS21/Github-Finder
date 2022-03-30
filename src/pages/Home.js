import UserResult from "../components/users/UserResult"
import UserSearch from "../components/users/UserSearch"

export default function Home() {
    return (
        <>
            <UserSearch />
            <h1 className="text-6xl">
                <UserResult />
            </h1>

        </>
    )
}
