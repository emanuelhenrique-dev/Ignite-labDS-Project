import {SVGAttributes} from "react"


interface LogoProps extends SVGAttributes <HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={448}
      height={510}
      viewBox="0 0 448 510"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_7_5096)" fill="#5DA9E9">
        <path d="M447.576 255.046c0-29.65-37.131-57.749-94.058-75.174 13.137-58.023 7.298-104.185-18.429-118.965-5.93-3.466-12.863-5.108-20.436-5.108v20.344c4.197 0 7.573.821 10.401 2.372 12.407 7.116 17.79 34.211 13.593 69.061-1.003 8.576-2.646 17.608-4.653 26.822-17.881-4.379-37.404-7.755-57.931-9.944-12.316-16.878-25.088-32.204-37.952-45.615 29.741-27.643 57.658-42.787 76.634-42.787V55.707c-25.089 0-57.932 17.881-91.139 48.9-33.208-30.836-66.051-48.535-91.14-48.535v20.345c18.885 0 46.893 15.053 76.634 42.513-12.772 13.411-25.545 28.646-37.678 45.524-20.618 2.189-40.142 5.565-58.023 10.035a275.365 275.365 0 01-4.744-26.457c-4.287-34.85 1.004-61.945 13.32-69.152 2.737-1.642 6.295-2.372 10.491-2.372V56.164c-7.663 0-14.596 1.642-20.618 5.108-25.635 14.78-31.383 60.851-18.154 118.691C36.948 197.479 0 225.487 0 255.046c0 29.649 37.13 57.748 94.058 75.173-13.137 58.023-7.298 104.185 18.429 118.965 5.93 3.466 12.864 5.109 20.527 5.109 25.088 0 57.931-17.882 91.139-48.9 33.208 30.836 66.051 48.535 91.139 48.535 7.663 0 14.597-1.643 20.618-5.109 25.636-14.78 31.383-60.851 18.155-118.691 56.563-17.425 93.511-45.524 93.511-75.082zm-118.782-60.851c-3.375 11.769-7.572 23.902-12.316 36.036-3.74-7.299-7.663-14.597-11.951-21.895-4.197-7.299-8.667-14.415-13.137-21.348 12.954 1.916 25.453 4.288 37.404 7.207zm-41.783 97.16c-7.116 12.316-14.415 23.994-21.987 34.85-13.593 1.186-27.369 1.825-41.236 1.825-13.776 0-27.552-.639-41.054-1.734-7.572-10.856-14.961-22.442-22.077-34.667-6.934-11.951-13.229-24.085-18.976-36.31 5.656-12.225 12.042-24.449 18.884-36.401 7.116-12.316 14.415-23.993 21.987-34.85 13.593-1.186 27.369-1.824 41.236-1.824 13.776 0 27.552.638 41.054 1.733 7.572 10.857 14.961 22.443 22.077 34.668 6.934 11.951 13.229 24.084 18.976 36.309-5.747 12.225-12.042 24.45-18.884 36.401zm29.467-11.86a391.194 391.194 0 0112.59 36.31c-11.951 2.919-24.541 5.383-37.587 7.298 4.47-7.024 8.941-14.232 13.137-21.621 4.197-7.299 8.12-14.688 11.86-21.987zm-92.507 97.343c-8.485-8.758-16.969-18.52-25.363-29.194 8.211.365 16.604.639 25.089.639 8.575 0 17.06-.183 25.362-.639a356.162 356.162 0 01-25.088 29.194zm-67.876-53.735c-12.955-1.915-25.453-4.287-37.404-7.207 3.375-11.769 7.572-23.902 12.316-36.036 3.74 7.299 7.663 14.597 11.951 21.895a603.925 603.925 0 0013.137 21.348zm67.419-189.85c8.485 8.758 16.969 18.52 25.362 29.194-8.21-.365-16.604-.639-25.088-.639-8.576 0-17.06.183-25.362.639a356.162 356.162 0 0125.088-29.194zm-67.51 53.735c-4.47 7.024-8.941 14.232-13.137 21.621-4.197 7.299-8.12 14.597-11.86 21.896a390.9 390.9 0 01-12.59-36.31 443.164 443.164 0 0137.587-7.207zM73.44 301.208c-32.295-13.776-53.187-31.839-53.187-46.162 0-14.324 20.892-32.478 53.187-46.163 7.846-3.376 16.422-6.386 25.271-9.214 5.2 17.881 12.043 36.492 20.527 55.559-8.393 18.976-15.144 37.496-20.253 55.286-9.032-2.829-17.608-5.93-25.545-9.306zm49.082 130.368c-12.407-7.116-17.79-34.211-13.593-69.061 1.004-8.576 2.646-17.608 4.653-26.822 17.881 4.379 37.404 7.755 57.931 9.944 12.316 16.878 25.088 32.205 37.952 45.615-29.741 27.643-57.658 42.787-76.634 42.787-4.105-.091-7.572-.912-10.309-2.463zm216.399-69.517c4.288 34.85-1.004 61.945-13.32 69.152-2.737 1.642-6.295 2.372-10.491 2.372-18.885 0-46.893-15.053-76.634-42.513 12.772-13.411 25.545-28.646 37.678-45.524 20.618-2.189 40.142-5.565 58.023-10.035 2.098 9.214 3.74 18.063 4.744 26.548zm35.123-60.851c-7.845 3.376-16.421 6.386-25.27 9.214-5.201-17.881-12.043-36.492-20.527-55.559 8.393-18.976 15.144-37.496 20.253-55.285 9.032 2.828 17.607 5.929 25.636 9.305 32.295 13.776 53.187 31.839 53.187 46.163-.091 14.323-20.983 32.478-53.279 46.162z" />
        <path d="M223.697 296.738c23.026 0 41.692-18.666 41.692-41.692s-18.666-41.693-41.692-41.693-41.692 18.667-41.692 41.693c0 23.026 18.666 41.692 41.692 41.692z" />
      </g>
      <defs>
        <clipPath id="clip0_7_5096">
          <path fill="#fff" d="M0 0H447.576V510H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
