<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link font-medium" to="/">Home</g-link>
      <g-link class="nav__link font-medium" to="/about/">About</g-link>
      <g-link class="nav__link font-medium" to="/blog/">Blog</g-link>
      <g-link class="nav__link font-medium" to="/work/">Projects</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
}

.nav__link {
  margin-left: 20px;
}

.nav__link.active--exact{
  color: #6a197d;
  font-weight: 600;
}
</style>
