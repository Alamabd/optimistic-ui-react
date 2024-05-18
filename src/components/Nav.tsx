import '../assets/style.css'
import { useUploading } from '../store/uploadingStore'

function Nav() {
  const { uploading } = useUploading()
  
  return (
    <nav>
      <ul>
        <li>
          <a href=".">Home</a>
        </li>
        <li>
          <a href="upload">Upload</a>
        </li>
        {
          uploading &&
          <li style={{marginLeft: 'auto', color: 'white'}}>
            uploading..
          </li>
        }
      </ul>
    </nav>
  )
}

export default Nav