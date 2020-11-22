<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <nav class="nav flex justify-center items-center">
      <div class="flex flex-col items-center">
        <div class="p-1 rounded-full nk-icon-bg">
          <Home />
        </div>
        <g-link class="nav__link font-medium ml-0 text-sm" to="/">Home</g-link>
      </div>
      <div class="flex flex-col items-center ml-6">
        <div class="p-1 rounded-full nk-icon-bg">
          <User />
        </div>
        <g-link class="nav__link font-medium text-sm" to="/about/">About</g-link>
      </div>
      <div class="flex flex-col items-center ml-6">
        <div class="p-1 rounded-full nk-icon-bg">
          <blog-icon />
        </div>
        <g-link class="nav__link font-medium text-sm" to="/blog/">Blog</g-link>
      </div>
      <div class="flex flex-col items-center ml-6">
        <div class="p-1 rounded-full nk-icon-bg">
          <Work />
        </div>
        <g-link class="nav__link font-medium text-sm" to="/work/">Work</g-link>
      </div>
      <div class="flex flex-col items-center ml-6">
        <a href="mailto:nekowebsol@gmail.com">
        <div class="p-1 px-2 rounded-sm bg-gray-700">
          <Mail class="text-white"/>
        </div>
        </a>
        <!-- <g-link class="nav__link font-medium text-sm" to="/work/">Work</g-link> -->
      </div>
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

<script>
  import Home from '~/assets/icons/home.svg'
  import User from '~/assets/icons/user.svg'
  import BlogIcon from '~/assets/icons/book.svg'
  import Work from '~/assets/icons/award.svg'
  import Mail from '~/assets/icons/mail.svg'
  export default {
    components: {
      Home,
      User,
      BlogIcon,
      Work,
      Mail
    }
  }
</script>


<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
}

.nav__link.active--exact{
  color: #6a197d;
  font-weight: 600;
  border-bottom: 1px solid rgba(107, 25, 125, 0.1);
}

/* .nk-icon-bg{
  background: #f2f4f7;
} */

</style>
