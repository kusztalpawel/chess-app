import './Files.css';

export default function Files ({files}: {files: string[]}) {
    return (<div className="files">{files.map(file => <span key={file.charCodeAt(0)}>{file}</span>)}
    </div>);
}
