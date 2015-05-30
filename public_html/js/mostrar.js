

function mostrarDialogoContenido(name){
            var cuadro = document.getElementById('burbujaTexto');
            var im = document.getElementById('imgen');
            
            if (name == 'aprender'){
               im.src = '../imagenesMascota/burbuja.png';
               cuadro.style.display = 'block';
            }else 
                if(name == 'digestivo'){
                    location.href='digestivo.html';
                    im.src = '../imagenesMascota/burbuja1.png';
                    cuadro.style.display = 'block';
                }
                else
                    if (name=='circulatorio'){
                        location.href='circulatorio.html';
                        im.src = '../imagenesMascota/burbuja2.png';
                        cuadro.style.display = 'block';
                    }
                    else
                        if (name=='respiratorio'){
                            location.href='respiratorio.html';
                            im.src = '../imagenesMascota/burbuja3.png';
                            cuadro.style.display = 'block';
                        }
                        else 
                            if (name=='urinario'){
                                location.href='urinario.html';
                                im.src = '../imagenesMascota/burbuja4.png';
                                cuadro.style.display = 'block';
                            }
                            else
                                if (name=='esqueleto'){
                                    location.href='oseo.html';
                                    im.src = '../imagenesMascota/burbuja5.png';
                                    cuadro.style.display = 'block';
                                }
                                else
                                    if (name=='nervioso'){
                                        location.href='nervioso.html';
                                        im.src = '../imagenesMascota/burbuja6.png';
                                        cuadro.style.display = 'block';
                                    }
                                    else
                                        if (name=='endocrino'){
                                            location.href='endocrino.html';
                                            im.src = '../imagenesMascota/burbuja7.png';
                                            cuadro.style.display = 'block';
                                        }
                            
}

function mostrarDialogoScratch(name){
            var cuadro = document.getElementById('burbujaTexto');
            var im = document.getElementById('imgen');
            
            if (name == 'general'){
               im.src = '../imagenesMascota/burbuja10.png';
               cuadro.style.display = 'block';
            }else 
                if(name == 'sis_digestivo.png'){
                    
                    im.src = '../imagenesMascota/burbuja11.png';
                    cuadro.style.display = 'block';
                }
                else
                    if (name=='sis_circulatorio.png'){
                        
                        im.src = '../imagenesMascota/burbuja12.png';
                        cuadro.style.display = 'block';
                    }
                    else
                        if (name=='sis_respiratorio.png'){
                            
                            im.src = '../imagenesMascota/burbuja13.png';
                            cuadro.style.display = 'block';
                        }
                        else 
                            if (name=='sis_urinario.png'){
                                
                                im.src = '../imagenesMascota/burbuja14.png';
                                cuadro.style.display = 'block';
                            }
                            else
                                if (name=='sis_esqueleto.png'){
                                    
                                    im.src = '../imagenesMascota/burbuja15.png';
                                    cuadro.style.display = 'block';
                                }
                                else
                                    if (name=='sis_nervioso.png'){
                                        
                                        im.src = '../imagenesMascota/burbuja16.png';
                                        cuadro.style.display = 'block';
                                    }
                                    else
                                        if (name=='sis_endocrino.png'){
                                            
                                            im.src = '../imagenesMascota/burbuja17.png';
                                            cuadro.style.display = 'block';
                                        } 
}


function mostrarDialogoTest(name){
            var cuadro = document.getElementById('burbujaTexto');
            var im = document.getElementById('imgen');
            
            if (name == 'general'){
                
               im.src = '../imagenesMascota/burbuja10.png';
               cuadro.style.display = 'block';
            }else 
                if(name == 'digestivo'){
                    cargaIMG("sis_digestivo_rellenar.png");
                    im.src = '../imagenesMascota/burbuja21.png';
                    cuadro.style.display = 'block';
                }
                else
                    if (name=='circulatorio'){
                        cargaIMG("sis_circulatorio_rellenar.png");
                        im.src = '../imagenesMascota/burbuja22.png';
                        cuadro.style.display = 'block';
                    }
                    else
                        if (name=='respiratorio'){
                            cargaIMG("sis_respiratorio_rellenar.png");
                            im.src = '../imagenesMascota/burbuja23.png';
                            cuadro.style.display = 'block';
                        }
                        else 
                            if (name=='urinario'){
                                cargaIMG("sis_urinario_rellenar.png");
                                im.src = '../imagenesMascota/burbuja24.png';
                                cuadro.style.display = 'block';
                            }
                            else
                                if (name=='esqueleto'){
                                    cargaIMG("esqueleto_rellenar.png");
                                    im.src = '../imagenesMascota/burbuja25.png';
                                    cuadro.style.display = 'block';
                                }
                                else
                                    if (name=='nervioso'){
                                        cargaIMG("sis_nervioso_rellenar.png");
                                        im.src = '../imagenesMascota/burbuja26.png';
                                        cuadro.style.display = 'block';
                                    }
                                    else
                                        if (name=='endocrino'){
                                            cargaIMG("sis_endocrino_rellenar.png");
                                            im.src = '../imagenesMascota/burbuja27.png';
                                            cuadro.style.display = 'block';
                                        } 
}