export const GET_USER = `
  query($login: String!) {
    user(login: $login) {
      repositories(first: 100) {
        nodes {
          id
          name
          nameWithOwner
          createdAt
          isPrivate
          description
        }
      }
    }
  }
`;

export const GET_COMMITCOMMENTS = `
  query getCommitComments($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      commitComments(first: 50) {
        totalCount
        node {
          url
          author {
            login
            avatarUrl
          }
          createdAt
          body
          reactions(first: 100) {
            node {
              user {
                login
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_REPO = `
  query getRepo($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      pullRequest(number: $number) {
        id
        number
        title
        author {
          login
          avatarUrl
        }
        additions
        deletions
        createdAt
        closedAt
        state
        url
        body
        bodyHTML
        reactions(first: 100) {
          totalCount
          nodes {
            user {
              id
              login
            }
          }
        }
        participants(first: 100) {
          totalCount
          nodes {
            id
            login
            location
            following(first: 100) {
              totalCount
              nodes {
                id
              }
            }
            starredRepositories(first: 100) {
              totalCount
              nodes {
                id
              }
            }
          }
        }
        comments(first: 100) {
          totalCount
          nodes {
            body
            bodyHTML
            createdAt
            author {
              login
              avatarUrl
            }
            reactions(first: 50) {
              totalCount
              nodes {
                user {
                  id
                  login
                }
              }
            }
          }
        }
        reviewThreads(first: 50) {
          totalCount
          nodes {
            comments(first: 20) {
              totalCount
              nodes {
                body
                bodyHTML
                createdAt
                author {
                  login
                  avatarUrl
                }
                reactions(first: 15) {
                  totalCount
                  nodes {
                    user {
                      id
                      login
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_REPOS = `
  query getRepos(
    $owner: String!
    $name: String!
    $beforeCursor: String
    $afterCursor: String
    $reactions: Int
    $participants: Int
    $comments: Int
    $commentsReactions: Int
    $rvThreads: Int
    $rvThreadsComments: Int
  ) {
    repository(owner: $owner, name: $name) {
      pullRequests(first: 10, before: $beforeCursor, after: $afterCursor) {
        totalCount
        nodes {
          id
          number
          title
          author {
            login
          }
          additions
          deletions
          createdAt
          closedAt
          state
          url
          body
          bodyHTML
          reactions(first: $reactions) {
            totalCount
            nodes {
              content
              user {
                id
                login
              }
            }
          }
          participants(first: $participants) {
            totalCount
            nodes {
              id
              login
            }
          }
          comments(first: $comments, orderBy: {field: UPDATED_AT, direction: ASC}) {
            totalCount
            nodes {
              body
              bodyHTML
              createdAt
              author {
                login
              }
              reactions(first: $commentsReactions) {
                totalCount
                nodes {
                  content
                  user {
                    id
                    login
                  }
                }
              }
            }
          }
          reviewThreads(first: $rvThreads) {
            totalCount
            nodes {
              comments(first: $rvThreadsComments) {
                totalCount
                nodes {
                  body
                  bodyHTML
                  createdAt
                  author {
                    login
                  }
                  reactions(first: 20) {
                    totalCount
                    nodes {
                      content
                      user {
                        id
                        login
                      }
                    }
                  }
                }
              }
            }
          }
        }
        pageInfo {
          startCursor
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export const DOWN_REPOS = `
  query downRepos(
    $owner: String!
    $name: String!
    $beforeCursor: String
    $afterCursor: String
    $reactions: Int
    $participants: Int
    $comments: Int
    $commentsReactions: Int
    $rvThreads: Int
    $rvThreadsComments: Int
  ) {
    repository(owner: $owner, name: $name) {
      pullRequests(first: 15, before: $beforeCursor, after: $afterCursor) {
        totalCount
        nodes {
          id
          number
          title
          author {
            login
          }
          additions
          deletions
          createdAt
          closedAt
          state
          url
          body
          bodyHTML
          reactions(first: $reactions) {
            totalCount
            nodes {
              content
              user {
                id
                login
              }
            }
          }
          participants(first: $participants) {
            totalCount
            nodes {
              id
              login
            }
          }
          comments(first: $comments, orderBy: {field: UPDATED_AT, direction: ASC}) {
            totalCount
            nodes {
              body
              bodyHTML
              createdAt
              author {
                login
              }
              reactions(first: $commentsReactions) {
                totalCount
                nodes {
                  content
                  user {
                    id
                    login
                  }
                }
              }
            }
          }
          reviewThreads(first: $rvThreads) {
            totalCount
            nodes {
              comments(first: $rvThreadsComments) {
                totalCount
                nodes {
                  body
                  bodyHTML
                  createdAt
                  author {
                    login
                  }
                  reactions(first: 20) {
                    totalCount
                    nodes {
                      content
                      user {
                        id
                        login
                      }
                    }
                  }
                }
              }
            }
          }
        }
        pageInfo {
          startCursor
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

/*{"owner": "twitter",
"name": "serial",
"afterCursor": null,
"comments": 1,
"commentsReactions": 1,
"rvThreads": 1,
"rvThreadsComments": 1
}*/

export const USER = `
  query userstats($owner: String!) {
    user(login: $owner) {
      login
      url
      avatarUrl
      followers(first: 1) {
        totalCount
      }
      following(first: 1) {
        totalCount
      }
    }
  }
`;

export const USER_STATS = `
  query userstats($owner: String!) {
    user(login: $owner) {
      login
      id
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(orderBy: {field: STARGAZERS, direction: DESC}, first: 50) {
        nodes {
          forkCount
          stargazerCount
          watchers {
            totalCount
          }
        }
      }
    }
  }
`;

export const REPOSITORY_PRS = `
  query getPRcant($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      pullRequests(first: 1) {
        totalCount
      }
    }
  }
`;

export const ORG_MEMBERS = `
query getOrgMembers($owner: String!){
  organization(login: $owner) {
    membersWithRole(first: 100) {
      nodes {
        isSiteAdmin
        isEmployee
        login
        id
      }
    }
  }
}
`;

export const RATE_LIMIT = `
  query rateLimit {
    rateLimit {
      limit
      remaining
      resetAt
    }
  }
`;
