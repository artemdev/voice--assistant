import {
    DialogContent,
    DialogDescription,
    DialogTitle,
} from '@/components/ui/dialog'

export default function ModalLoader() {
    return (
        <DialogContent className="max-h-[90vh] overflow-y-auto max-w-2xl">
            <DialogTitle className="text-center">
                Loading session...
            </DialogTitle>
            <DialogDescription className="flex flex-col items-center justify-center py-12">
                <span className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            </DialogDescription>
        </DialogContent>
    )
}
