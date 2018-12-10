<template>
	<nav class="topbar py-3 position-absolute">
		<div class="container">

			<a class="topbar-brand" href="#">{{$root.company}}</a>

			<ul class="nav topbar-nav ml-auto">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Features</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Pricing</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
    export default {
        name: 'ComponentNavbar'
    }
</script>
