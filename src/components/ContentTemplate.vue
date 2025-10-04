<template>
    <div class="container content">
        <slot />
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
    .container {
        padding: 40px 20px;
        max-width: 1024px;
        margin: 0 auto;
        width: 100%;

    }
    .content {
        h1, h2, h3, h4, h5, h6 {
            font-weight: 800;
        }
        h1 {
            font-size: clamp(2rem, 5vw, 3rem);
        }

        h2 {
            font-size: clamp(1.75rem, 4vw, 2.5rem);
        }

        h3 {
            font-size: clamp(1.5rem, 3vw, 2rem);
        }

        h4 {
            font-size: clamp(1.25rem, 2.5vw, 1.75rem);
        }
        p {
            margin-top: 16px;
            font-size: clamp(1rem, 1.5vw, 1.25rem);
            line-height: 1.5;
        }
        ul {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            a {
                text-decoration: underline;
                transition: all 300ms ease;
                font-size: clamp(1rem, 1.5vw, 1.25rem);
                line-height: 1.5;
                &:hover {
                    color: dodgerblue;
                }
            }
        }
    }
</style>
