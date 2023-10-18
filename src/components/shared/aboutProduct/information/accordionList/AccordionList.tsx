import { AccordionType } from 'shared/types/product.type'
import { Accordion } from 'components/ui/accordion/Accordion'

interface Props {
    accordion: AccordionType[]
}

export function AccordionList({ accordion }: Props) {
    return (
        <Accordion>
            {accordion.map(({ title, body }, index) => {
                return (
                    <Accordion.Item key={index} title={title}>
                        {body}
                    </Accordion.Item>
                )
            })}
        </Accordion>
    )
}
