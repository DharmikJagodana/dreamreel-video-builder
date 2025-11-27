import { Logo } from '@/components/Logo';
import { Html, Head, Body, Container, Section, Heading, Text, Button } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface WelcomeEmailProps {
    name: string;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => (
    <Html>
        <Head />
        <Tailwind>
            <Body className="bg-white font-sans">
                <Container className="mx-auto p-4 max-w-2xl">
                    <Section className="text-center mb-6">
                        <Logo />
                    </Section>

                    <Section className="mb-6">
                        <Heading className="text-2xl font-bold text-gray-900 mb-4">
                            Welcome to Dreamreel, {name}!
                        </Heading>
                        <Text className="text-gray-700 mb-4">
                            Welcome to Dreamreel! We&apos;re excited to have you on board. Dreamreel empowers you to create, edit, and share stunning videos with ease—right from your browser.
                        </Text>
                        <Text className="text-gray-700 mb-6">
                            Get started by creating your first project, importing your media, and exploring our intuitive editing tools. If you ever need help or have feedback, our team is here for you—just reply to this email!
                        </Text>
                    </Section>

                    <Section className="text-center">
                        <Button
                            href="https://calendly.com/rely-prasanjit/30min"
                            className="bg-blue-600 text-white font-medium py-2 px-6 rounded-0"
                        >
                            Book a Call
                        </Button>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default WelcomeEmail;
