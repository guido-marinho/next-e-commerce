import clsx from 'clsx';

export default function LoadingSkeleton({isLoading}: {isLoading?: boolean}) {
  return (
    <ul className={clsx(
      'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6',
      {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before: animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r ': isLoading,
      }
    )}>
      <li className="bg-white rounded-lg shadow-lg flex flex-col">
        <div className="block relative h-48 rounded overflow-hidden"/>
        
        <div className="p-4">
          <h2 className="text-gray-900 title-font text-lg font-medium"/>
          < p className="mt-1"/>
        </div>

        <div className="text-gray-900 title-font text-lg font-medium" />
      </li>
    </ul>
  )
}
