import { useForm } from '@inertiajs/react';
import { useRef } from 'react';
import InputError from '@/Components/InputError';

const ImageUpload = ({images, url, model, modelId, maxImages}) => {
    const {data, setData, setError, errors, processing, post} = useForm({
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
            setError('images', 'Some files were not accepted. Only JPG, JPEG, and PNG files are allowed.');
            return
        } else {
            setError('');
        }

        if (validFiles.length > maxImages) {
            setError('images', `Upload up to ${maxImages} images`);
            return
        } else {
            setError('');
        }

        setData('images', validFiles)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.images.length === 0) return 
        
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
                <input ref={fileInputRef} type="file" accept="image/jpeg, image/png, image/jpg" multiple onChange={handleImageChange} max={2} />
                <button type="submit" className='bg-white text-primary border-primary border-2 font-bold px-2 h-[30px] my-auto rounded-md'>{processing ? 'Uploading...' : 'Upload'}</button>
            </div>
            <InputError message={errors.images} className="mt-2" />
        </form>
    );
};

export default ImageUpload;
