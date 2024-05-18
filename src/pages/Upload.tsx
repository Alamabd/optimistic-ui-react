import { FormEvent } from "react"
import Nav from "../components/Nav"
import { UploadServices } from "../services/UploadServices"
import { useUploading } from "../store/uploadingStore"

function Upload() {
    const { uploading, setUploading } = useUploading()

    const uploadFile = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            setUploading(true)
            await UploadServices()
        } catch (error) {
            console.log(error)
        } finally {
            setUploading(false)
        }
    }

    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <article>
                    <form onSubmit={uploadFile}>
                        <h2>Input file</h2>
                        <button disabled={uploading} type="submit">Submit</button>
                    </form>
                </article>
            </main>
        </div>
    )
}

export default Upload