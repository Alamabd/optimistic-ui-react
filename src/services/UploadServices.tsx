export function UploadServices() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 5000)
    })
}