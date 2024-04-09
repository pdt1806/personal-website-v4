import {
  Alert,
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Group,
  Paper,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { IconInfoCircle } from '@tabler/icons-react';
import { useState } from 'react';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ContactIconsList } from './icons';
import classes from './index.module.css';

export default function Contact() {
  const form = useForm({
    initialValues: {
      email: '',
      fullName: '',
      message: '',
      'g-recaptcha-response': '',
    },
    validate: {
      email: isEmail('Invalid email.'),
      fullName: isNotEmpty('Enter your name.'),
      message: isNotEmpty('Enter your message.'),
    },
  });

  const [messageSending, setMessageSending] = useState(false);
  const [messageSent, setMessageSent] = useState<boolean | null>(null);

  return (
    <Container id="contact">
      <Divider my="xl" />
      <Center mb="xl">
        <Flex direction="column" align="center">
          <Title order={1} ta="center">
            Interested in collaborating with me?
          </Title>
          <Text c="dimmed" mt="md" ta="center">
            I'm always open to new opportunities and collaborations. Feel free to contact me!
          </Text>
        </Flex>
      </Center>
      <Paper shadow="md" radius="lg">
        <Box className={classes.wrapper}>
          <Box className={classes.contacts}>
            <Text fz="xl" fw={700} className={classes.title}>
              Contact information
            </Text>

            <ContactIconsList />
          </Box>
          <Box
            className={classes.form}
            component="form"
            onSubmit={form.onSubmit(async () => {
              setMessageSending(true);
              try {
                const response = await fetch('https://webemail.bennynguyen.dev/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(form.values),
                });
                setMessageSending(false);
                setMessageSent(response.ok);
              } catch (error) {
                setMessageSending(false);
                setMessageSent(false);
              }
            })}
          >
            <TextInput
              disabled={messageSent != null}
              label="Full name"
              autoComplete="name"
              placeholder="Your name"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('fullName')}
            />
            <TextInput
              disabled={messageSent != null}
              mt="md"
              label="Email"
              autoComplete="email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('email')}
            />
            <Textarea
              disabled={messageSent != null}
              required
              label="Your message"
              placeholder="I want to collaborate with you on..."
              minRows={3}
              maxRows={3}
              autosize
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('message')}
            />
            {messageSent == null && (
              <GoogleReCaptchaProvider reCaptchaKey="6LfIIKgpAAAAAHAr5zyz8L2q74HqOkdFTa4xPgJE">
                <GoogleReCaptcha
                  onVerify={(token) => {
                    form.setFieldValue('g-recaptcha-response', token as string);
                  }}
                />
              </GoogleReCaptchaProvider>
            )}
            <Text c="dimmed" fz="xs" mt="xs">
              This site is protected by reCAPTCHA and the Google{' '}
              <Anchor href="https://policies.google.com/privacy" fz="xs">
                Privacy Policy
              </Anchor>{' '}
              and{' '}
              <Anchor href="https://policies.google.com/terms" fz="xs">
                Terms of Service
              </Anchor>{' '}
              apply.
            </Text>
            <Group justify="flex-end" mt="md">
              <Button type="submit" disabled={messageSent != null} loading={messageSending}>
                Send message
              </Button>
            </Group>
            {messageSent != null &&
              (messageSent ? (
                <Alert
                  variant="light"
                  mt="md"
                  color="green"
                  title="Message sent!"
                  icon={<IconInfoCircle />}
                >
                  Your message has been sent successfully!
                </Alert>
              ) : (
                <Alert variant="light" mt="md" color="red" title="Error!" icon={<IconInfoCircle />}>
                  Something went wrong, please try again later.
                </Alert>
              ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
