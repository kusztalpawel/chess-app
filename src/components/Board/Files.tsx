import './Files.css';

const Files = ({files}: {files: string[]})  => {
    return <div className="files">{files.map(file => <span key={file}>{file}</span>)}
    </div>
}

export default Files