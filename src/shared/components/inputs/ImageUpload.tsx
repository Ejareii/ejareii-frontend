'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import {HiXMark} from 'react-icons/hi2'

interface ImageUploadProps {
  onFilesChange?: (files: File[]) => void;
}

const ImageUpload :React.FC<ImageUploadProps>= ({ onFilesChange }) => {
  const [files, setFiles] = useState<File[]>([])
  const [rejected, setRejected] = useState<FileRejection[]>([]);


  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
    console.log(acceptedFiles)
    if (acceptedFiles?.length) {
      setFiles((previousFiles: File[]) => [
        ...previousFiles,
        ...acceptedFiles.map(file =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      ])
    }

    if (fileRejections?.length) {
      setRejected((previousFiles: FileRejection[]) => [...previousFiles, ...fileRejections])
    }
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': []
    },
    maxSize: 1024 * 1000,
    onDrop
  })
  
  useEffect(() => {
    if (onFilesChange) {
      onFilesChange(files);
    }
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach(file => URL.revokeObjectURL(file.type))
  }, [files,onFilesChange]);

 const removeFile = (name:any) => {
    setFiles(files => files.filter(file => file.name !== name))
  }

  const removeAll = () => {
    setFiles([])
    setRejected([])
  }

  const removeRejected = (name:any) => {
    setRejected(files => files.filter(({ file }) => file.name !== name))
  }

  return (
    <form >
      <div
      className="
      relative
      cursor-pointer
      hover:opacity-70
      transition
      border-dashed 
      border-2 
      p-20 
      border-neutral-300
      flex
      flex-col
      justify-center
      items-center
      gap-4
      text-neutral-600
      "
        {...getRootProps({
          
        })}
      >
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center gap-4'>
          <ArrowUpTrayIcon className='w-5 h-5 fill-current' />
          {isDragActive ? (
            <p>فایل ها را اینجا رها کنید...</p>
          ) : (
            <p>فایل‌ها را اینجا بکشید و رها کنید ...</p>
          )}
        </div>
      </div>

      {/* Preview */}
      <section className='mt-10'>
        <div className='flex gap-4'>
          <h2 className='title text-3xl font-semibold'>پیش نمایش</h2>
          <button
            type='button'
            onClick={removeAll}
            className='mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-red-500 hover:text-white transition-colors'
          >
            تمام فایل ها را حذف کنید
          </button>
     
        </div>

        {/* Accepted files */}
        <h3 className='title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3'>
         فایل های پذیرفته شده
        </h3>
        <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
          {files.map(file => (
            <li key={file.name} className='relative h-32 rounded-md shadow-lg'>
              <Image
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                // onLoad={() => {
                //   URL.revokeObjectURL(file.preview)
                // }}
                className='h-full w-full object-contain rounded-md'
              />
              <button
                type='button'
                className='w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-red transition-colors'
                onClick={() => removeFile(file.name)}
              >
                <HiXMark />
              </button>
              <p className='mt-2 text-neutral-500 text-[12px] font-medium'>
                {file.name}
              </p>
            </li>
          ))}
        </ul>

        {/* Rejected Files */}
        <h3 className='title text-lg font-semibold text-neutral-600 mt-24 border-b pb-3'>
          فایل های رد شده
        </h3>
        <ul className='mt-6 flex flex-col'>
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className='flex items-start justify-between'>
              <div>
                <p className='mt-2 text-neutral-500 text-sm font-medium'>
                  {file.name}
                </p>
                <ul className='text-[12px] text-red-400'>
                  {errors.map(error => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type='button'
                className='mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-red-500 hover:text-white transition-colors'
                onClick={() => removeRejected(file.name)}
              >
                حذف کردن
              </button>
            </li>
          ))}
        </ul>
      </section>
    </form>
  )
};

export default ImageUpload;


