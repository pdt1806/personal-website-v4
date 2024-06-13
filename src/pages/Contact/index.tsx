/* eslint-disable react/no-unescaped-entities */
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
import { UseFormReturnType, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { IconInfoCircle } from '@tabler/icons-react';
import { useState } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { ContactIconsList } from './icons';
import classes from './index.module.css';

type ContactFormValues = {
  email: string;
  fullName: string;
  message: string;
};

function ContactForm({
  onSubmit,
  messageSent,
  messageSending,
  form,
  setMessageSending,
  setMessageSent,
}: {
  onSubmit: (token: string) => void;
  messageSent: boolean | null;
  messageSending: boolean;
  form: UseFormReturnType<ContactFormValues, (values: ContactFormValues) => ContactFormValues>;
  setMessageSending: (value: boolean) => void;
  setMessageSent: (value: boolean) => void;
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async () => {
    if (!executeRecaptcha) {
      setMessageSending(false);
      setMessageSent(false);
      return;
    }

    const token = await executeRecaptcha('contact_form');
    onSubmit(token);
  };

  return (
    <Box className={classes.form} component="form" onSubmit={form.onSubmit(handleSubmit)}>
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
      <Text c="dimmed" fz="xs" mt="xs">
        This site is protected by reCAPTCHA and the Google{' '}
        <Anchor href="https://policies.google.com/privacy" fz="xs" c="bn-blue">
          Privacy Policy
        </Anchor>{' '}
        and{' '}
        <Anchor href="https://policies.google.com/terms" fz="xs" c="bn-blue">
          Terms of Service
        </Anchor>{' '}
        apply.
      </Text>
      <Group justify="flex-end" mt="md">
        <Button
          type="submit"
          disabled={messageSent != null}
          loading={messageSending}
          color="bn-blue"
        >
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
  );
}

export default function Contact() {
  const form = useForm({
    initialValues: {
      email: '',
      fullName: '',
      message: '',
    },
    validate: {
      email: isEmail('Invalid email.'),
      fullName: isNotEmpty('Enter your name.'),
      message: isNotEmpty('Enter your message.'),
    },
  });

  const [messageSending, setMessageSending] = useState(false);
  const [messageSent, setMessageSent] = useState<boolean | null>(null);

  const handleSubmit = async (token: string) => {
    try {
      setMessageSending(true);
      const payload = { ...form.values, 'g-recaptcha-response': token };
      const response = await fetch('https://webemail.bennynguyen.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      setMessageSending(false);
      setMessageSent(response.ok);
    } catch (error) {
      setMessageSending(false);
      setMessageSent(false);
    }
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfIIKgpAAAAAHAr5zyz8L2q74HqOkdFTa4xPgJE">
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
            <ContactForm
              onSubmit={handleSubmit}
              messageSent={messageSent}
              messageSending={messageSending}
              form={form}
              setMessageSending={setMessageSending}
              setMessageSent={setMessageSent}
            />
          </Box>
        </Paper>
      </Container>
    </GoogleReCaptchaProvider>
  );
}
