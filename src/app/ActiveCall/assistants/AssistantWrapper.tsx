export default function AssistantWrapper({
    children,
}: {
    children: React.ReactNode[]
}) {
    return (
        <div className="relative flex items-center justify-center mx-auto w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px]">
            {children}
        </div>
    )
}
