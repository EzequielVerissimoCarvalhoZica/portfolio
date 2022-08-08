// import styles from '../styles/Home.module.css'

export default function Home({ repos }) {
  return (
    <div>
      {
        repos.map((r) => <p key={r.name}>{r.name}</p>)
      }
    </div>
  )
}

export const getServerSideProps = async () => {
  const MY_URL_REPOS = 'https://api.github.com/users/EzequielVerissimoCarvalhoZica/repos'

  const response = await fetch(MY_URL_REPOS);
  const data = await response.json();

  const repos = data
  .filter(({ name }) => (
    name === 'project-algorithms' ||
    name === 'project-tech-news' ||
    name === 'project-inventory-report' ||
    name === 'project-job-insights' ||
    name === 'project-ting' ||
    name === 'project-car-shop' ||
    name === 'project-futebol-clube' ||
    name === 'project-trybesmith' ||
    name === 'project-blogs-api' ||
    name === 'project-pessoal-store-manager' ||
    name === 'project-tunes'
    ))
  .map(({ created_at, html_url, language, name, description }) => {
    const newName = name.replace("project-", "")
    return {
      name: newName,
      description,
      language,
      createdAt: created_at,
      htmlUrl: html_url,
    }
});

  return {
    props: {
      repos,
    },
  };
};