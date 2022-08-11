// import styles from '../styles/Home.module.css'

import { getRepos } from "../helpers/requests";

export default function Home({ repos }) {
  return (
    <div>
      {
        repos.map(({ name }) => <p key={name}>{name}</p>)
      }
    </div>
  )
}

export const getServerSideProps = async () => {
  const reposName = [
    'project-algorithms',
    'project-tech-news',
    'project-inventory-report',
    'project-car-shop',
    'project-futebol-clube',
    'project-trybesmith',
    'project-blogs-api',
    'project-tunes',
  ];
  const repos = await getRepos('EzequielVerissimoCarvalhoZica', reposName)

  return {
    props: {
      repos,
    },
  };
};