import {
  ActionIcon,
  Alert,
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconInfoCircle,
} from '@tabler/icons-react';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import { ContactIconsList } from './icons';
import classes from './index.module.css';

const social = [
  {
    icon: IconBrandGithub,
    to: 'https://github.com/pdt1806',
  },
  {
    icon: IconBrandInstagram,
    to: 'https://instagram.com/benny_ng08/',
  },
  {
    icon: IconBrandFacebook,
    to: 'https://facebook.com/pdteggman/',
  },
  {
    icon: IconBrandX,
    to: 'https://x.com/pdteggman/',
  },
];

export function Contact() {
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

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
      component={Link}
      to={Icon.to}
      target="_href"
    >
      <Icon.icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  const [messageSending, setMessageSending] = useState(false);
  const [messageSent, setMessageSent] = useState<boolean | null>(null);

  return (
    <Container className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contact me</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and I will get back to you within 24 hours
          </Text>

          <ContactIconsList />

          <Group mt="xl">{icons}</Group>
        </div>
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
            placeholder="John Doe"
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
            placeholder="I want to talk with you about..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('message')}
          />
          {messageSent == null && (
            <ReCAPTCHA
              sitekey="6LdnCkIpAAAAAKGhynf4oAl_6wzJapkYWNQYhDbg"
              onChange={(value) => form.setFieldValue('g-recaptcha-response', value as string)}
              style={{ marginTop: 'var(--mantine-spacing-md)' }}
            />
          )}
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
      </SimpleGrid>
    </Container>
  );
}
