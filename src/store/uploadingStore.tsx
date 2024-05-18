import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware";

interface UploadingState {
    uploading: boolean;
    setUploading: (upload: boolean) => void
}

export const useUploading = create(
    persist<UploadingState>(
        set => ({
            uploading: false,
            setUploading: (upload) => set(() => ({uploading: upload}))
        }),
        {
            name: "uploading",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

useUploading.subscribe(() => {
    console.log(useUploading.getState())
    
})