export const getRepos = async (user, reposName) => {
  const MY_URL_REPOS = `https://api.github.com/users/${user}/repos`
  const response = await fetch(MY_URL_REPOS);
  const data = await response.json();

  const repos = data
  .filter(({ name }) => reposName.includes(name))
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

  return repos;
};
