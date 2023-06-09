import { Anchor, Group } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

interface LinkChevronProps {
    link: string,
    text: string,
}

const ChevronLink = ({ link, text }: LinkChevronProps) => {
    return (
        <Anchor align="center" href={link} target="_blank">
            <Group spacing={0}>
                {text}<IconChevronRight />
            </Group>
        </Anchor>
    );
};

export default ChevronLink;