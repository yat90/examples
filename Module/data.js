const modulesData = {
    "index.rete": {
        "data": {
            "id": "demo@0.1.0",
            "nodes": {
                "4": {
                    "id": 4,
                    "data": {
                        "module": "module1.rete"
                    },
                    "inputs": {
                        "2": {
                            "connections": [{
                                "node": 12,
                                "output": "num",
                                "data": {}
                            }]
                        },
                        "...": {
                            "connections": [{
                                "node": 12,
                                "output": "num",
                                "data": {}
                            }]
                        }
                    },
                    "outputs": {
                        "...": {
                            "connections": [{
                                "node": 5,
                                "input": "num1",
                                "data": {}
                            }, {
                                "node": 5,
                                "input": "num2",
                                "data": {}
                            }]
                        }
                    },
                    "position": [854, 159],
                    "name": "Module"
                },
                "5": {
                    "id": 5,
                    "data": {
                        "num1": 0,
                        "num2": 0
                    },
                    "inputs": {
                        "num1": {
                            "connections": [{
                                "node": 4,
                                "output": "...",
                                "data": {}
                            }]
                        },
                        "num2": {
                            "connections": [{
                                "node": 4,
                                "output": "...",
                                "data": {}
                            }]
                        }
                    },
                    "outputs": {
                        "num": {
                            "connections": []
                        }
                    },
                    "position": [1217, 123],
                    "name": "Add"
                },
                "12": {
                    "id": 12,
                    "data": {
                        "num": 1
                    },
                    "inputs": {},
                    "outputs": {
                        "num": {
                            "connections": [{
                                "node": 4,
                                "input": "...",
                                "data": {}
                            }, {
                                "node": 4,
                                "input": "2",
                                "data": {}
                            }]
                        }
                    },
                    "position": [410, 212],
                    "name": "Number"
                }
            }
        }
    },
    "module1.rete": {
        "data": {
            "id": "demo@0.1.0",
            "nodes": {
                "1": {
                    "id": 1,
                    "data": {
                        "name": "..."
                    },
                    "inputs": {},
                    "outputs": {
                        "output": {
                            "connections": [{
                                "node": 9,
                                "input": "num1",
                                "data": {}
                            }]
                        }
                    },
                    "position": [348, 78],
                    "name": "Input"
                },
                "2": {
                    "id": 2,
                    "data": {
                        "name": "..."
                    },
                    "inputs": {
                        "input": {
                            "connections": [{
                                "node": 9,
                                "output": "num",
                                "data": {}
                            }]
                        }
                    },
                    "outputs": {},
                    "position": [1086, 202],
                    "name": "Output"
                },
                "8": {
                    "id": 8,
                    "data": {
                        "name": "2"
                    },
                    "inputs": {},
                    "outputs": {
                        "output": {
                            "connections": [{
                                "node": 9,
                                "input": "num2",
                                "data": {}
                            }]
                        }
                    },
                    "position": [285, 320],
                    "name": "Input"
                },
                "9": {
                    "id": 9,
                    "data": {
                        "num1": 0,
                        "num2": 0
                    },
                    "inputs": {
                        "num1": {
                            "connections": [{
                                "node": 1,
                                "output": "output",
                                "data": {}
                            }]
                        },
                        "num2": {
                            "connections": [{
                                "node": 8,
                                "output": "output",
                                "data": {}
                            }]
                        }
                    },
                    "outputs": {
                        "num": {
                            "connections": [{
                                "node": 2,
                                "input": "input",
                                "data": {}
                            }]
                        }
                    },
                    "position": [730, 275],
                    "name": "Add"
                }
            }
        }
    }
};