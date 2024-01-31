<template>
  <VApp>
    <VAppBar title="CRUD Tasks">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/task">Tasks</RouterLink> | 
      <RouterLink to="/about">About</RouterLink>
    </VAppBar>
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>