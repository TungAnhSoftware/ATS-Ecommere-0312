import { Card, CardProps } from "@mantine/core";

const CenterCard = (props: CardProps) => {
    return (
        <Card shadow="sm"
            padding='lg'
            radius='xl'
            withBorder
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            {...props}>
        </Card>
    );
};

export default CenterCard;