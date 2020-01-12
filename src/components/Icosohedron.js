import React from "react"
import * as THREE from 'three'
import * as basicScroll from 'basicscroll'
import debounce from 'lodash/debounce'

class Icosohedron extends React.PureComponent {

    state = {
        device: undefined,
        hasRendered: false
    }

    scrollConfig = {
        from: '0px',
        to: '800px',
        direct: true,
        props: {
            '--icosohedron-ty': {
                from: '0px',
                to: '200px'
            }
        }
    }

    container = React.createRef()

    componentDidMount() {
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            10000
        )
        this.renderer = new THREE.WebGLRenderer({
            alpha: true
        })

        this.camera.position.set( 10,10,10 )
        this.camera.lookAt( 0, 0, 0 )

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        )

        this.renderer.domElement.className = `icosohedron__canvas`

        this.checkDevice(() => {
            this.init()
            this.buildScene()
            this.animate()
            this.bindEvents()
        })
    }

    checkDevice = callback => {
        const device = window.matchMedia('(min-width: 840px)').matches
            ? 'desktop'
            : 'mobile'

        if (device === this.state.device) {
            return
        }

        this.setState({
            device
        }, callback)
    }

    init = () => {
        this.container.current.appendChild(
            this.renderer.domElement
        )

        const path = '/images/textures'
        const fileName = 'scramble.jpg'

        this.textureCube = THREE.ImageUtils.loadTextureCube([
            `${path}/${fileName}`,
            `${path}/${fileName}`,
            `${path}/${fileName}`,
            `${path}/${fileName}`,
            `${path}/${fileName}`,
            `${path}/${fileName}`
        ])

        this.reflectiveMaterial = this.getMaterial()
    }

    getMaterial = () => {
        return new THREE.MeshBasicMaterial({
            color: this.state.device === 'mobile'
                ? 0x666666
                : 0x979797,
            envMap: this.textureCube,
            // wireframe: true,
            // wireframeLinewidth: 10,
            side: THREE.DoubleSide
        })
    }

    buildScene = () => {
        this.buildSmallIcosahedron()
        this.buildLargeIcosahedron()
        this.buildLights()
        this.afterBuild()
    }

    afterBuild = () => {
        this.basicScroll = basicScroll.create({
            elem: document.querySelector('.icosohedron__canvas'),
            ...this.scrollConfig
        })

        this.basicScroll.start()
        this.position()
    }

    buildSmallIcosahedron = () => {
        const geometry = new THREE.IcosahedronGeometry( 3 )

        this.smallIcosahedron = new THREE.Mesh(
            geometry,
            this.reflectiveMaterial
        )

        this.scene.add( this.smallIcosahedron )
    }

    buildLargeIcosahedron = () => {
        const geometry = new THREE.IcosahedronGeometry( 200 )

        this.largeIcosahedron = new THREE.Mesh(
            geometry,
            this.reflectiveMaterial
        )
    }

    buildLights = () => {
        this.light = new THREE.PointLight( 0xffffff, 1.5 )
        this.scene.add( this.light )
    }

    animate = () => {
        requestAnimationFrame( this.animate )

        this.largeIcosahedron.rotation.y += this.state.device === 'mobile'
            ? .0001
            : .001
        this.smallIcosahedron.rotation.z += this.state.device === 'mobile'
            ? .0007
            : .003

        this.renderer.render(
            this.scene,
            this.camera
        )

        if (!this.state.hasRendered) {
            this.setState({
                hasRendered: true
            })
            document.body.dispatchEvent(
                new Event('first-three-render')
            )
        }
    }

    bindEvents = () => {
        window.onresize = debounce(this.onResize, 150)
    }

    onResize = () => {
        this.resizeCanvas()
        this.checkDevice(() => {
            this.position()
            this.updateMaterials()
        })
    }

    resizeCanvas = () => {
        const windowHeight = window.innerHeight >= 900
            ? window.innerHeight
            : 900

        this.camera.aspect = window.innerWidth / windowHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(
            window.innerWidth,
            windowHeight
        )
    }

    position = () => {
        const { device } = this.state
        this.light.position.set( 30, 30, 30 )

        if (device === 'mobile') {
            this.smallIcosahedron.position.set( 6, 9, 6 )
            this.scene.remove(this.largeIcosahedron)
        }

        if (device === 'desktop') {
            this.smallIcosahedron.position.set( 0, 0, 0 )
            this.largeIcosahedron.position.set( 0, -100, -400 )
            this.light.position.set( 30, 30, 30 )
            this.scene.add(this.largeIcosahedron)
        }
    }

    updateMaterials = () => {
        this.largeIcosahedron.material = this.getMaterial()
        this.smallIcosahedron.material = this.getMaterial()
        // this.largeIcosahedron.material.needsUpdate = true
        // this.smallIcosahedron.material.needsUpdate = true
    }

    render() {
        return (
            <div ref={this.container} className="icosohedron" />
        )
    }
}

export default Icosohedron