import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { Typography, Link } from '@material-ui/core'

import { StyledArticlesBox } from './styles'

const ArticlesBox = (props) => {
  const { articles } = props

  return (
    <StyledArticlesBox>
      <Typography variant="h3" className="tickets_ArticlesBox_title">
        <FormattedMessage
          id="tickets.articles.box.title"
          defaultMessage="articles opened before creating this ticket"
        />
      </Typography>

      <ul className="tickets_ArticlesBox_articles">
        {articles.map((article) => (
          <li key={article.url} className="tickets_ArticlesBox_article">
            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tickets_ArticlesBox_article-link"
            >
              {article.name}
            </Link>
          </li>
        ))}
      </ul>
    </StyledArticlesBox>
  )
}

ArticlesBox.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ArticlesBox
