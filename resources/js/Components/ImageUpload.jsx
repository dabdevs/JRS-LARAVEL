import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

const ImageUpload = ({images, url, model, modelId}) => {
    const {data, setData, setError, post} = useForm({
        images: images || [],
        model: model,
        modelId: modelId
    })

    const fileInputRef = useRef(null)

    if (!(url && model && modelId)) throw new Error('Model data is missing')

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const validFiles = files.filter(file => {
            return (
                file.type === 'image/jpeg' ||
                file.type === 'image/png' ||
                file.type === 'image/jpg'
            )
        })

        if (validFiles.length !== files.length) {
            setError('Some files were not accepted. Only JPG, JPEG, and PNG files are allowed.');
        } else {
            setError('');
        }

        setData('images', validFiles)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < data.images.length; i++) {
            formData.append('images[]', data.images[i])
        }
        
        post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }

        setData('images', [])
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="gap-2 flex w-80 align-middle">
                <input ref={fileInputRef} type="file" accept="image/jpeg, image/png, image/jpg" multiple onChange={handleImageChange} />
                <button type="submit" className='bg-white text-primary border-primary border-2 font-bold px-2 h-[30px] my-auto rounded-md'>Upload</button>
            </div>
        </form>
    );
};

export default ImageUpload;
