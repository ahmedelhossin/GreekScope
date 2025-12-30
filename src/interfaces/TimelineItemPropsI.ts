export interface TimelineItemProps {
    date: string;
    title: string;
    description: string;
    link: string;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}