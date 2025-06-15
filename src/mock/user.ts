import { faker } from '@faker-js/faker'

export const createUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    bio: faker.lorem.sentence(),
    role: 'user',
    location: faker.location.city(),
    ip: faker.internet.ip(),
    website: {
      url: faker.internet.url(),
      title: faker.lorem.sentence(),
      desc: faker.lorem.paragraphs(3).substring(0, 500),
      cover: faker.image.url()
    },
    socials: [
      {
        type: 'github',
        url: faker.internet.url()
      },
      {
        type: 'twitter',
        url: faker.internet.url()
      },
      {
        type: 'facebook',
        url: faker.internet.url()
      },
      {
        type: 'linkedin',
        url: faker.internet.url()
      }
    ],
    params: {},
    isActive: true,
    isVerified: true,
    token: faker.string.alphanumeric(),
    failLoginCount: 0,
    lockoutExpiresAt: null,
    lastLoginAt: null,
    createdAt: faker.date.past(),
    updatedAt: faker.date.past()
  }
}
